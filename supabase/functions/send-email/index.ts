import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createTransport } from 'npm:nodemailer';

const TO = 'sup@grk3-ai.help';

// Функция для получения CORS заголовков
const getCorsHeaders = (origin) => {
  console.log('Request Origin:', origin);
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
  };
};

// Настройка Nodemailer транспортера
const createTransporter = () => {
  const gmailUser = Deno.env.get('EMAIL_USER');
  const gmailAppPassword = Deno.env.get('EMAIL_PASS');

  if (!gmailUser || !gmailAppPassword) {
    console.error('Gmail credentials are not set');
    throw new Error('EMAIL_USER or EMAIL_APP_PASSWORD is not set');
  }

  return createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Используем порт 587 с STARTTLS для большей совместимости
    secure: true, // STARTTLS для порта 587
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
};

serve(async (req) => {
  const origin = req.headers.get('Origin') || '';
  console.log('Processing request with Origin:', origin);
  console.log('Request Headers:', Object.fromEntries(req.headers));

  // Обработка CORS preflight запросов
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return new Response('ok', { headers: getCorsHeaders(origin) });
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    // Парсинг JSON тела запроса
    const { name, email, company, productName, comments, website } = await req.json();
    console.log('Received submission:', { name, email, website, productName, comments });

    // Валидация обязательных полей
    if (!name || !email || !comments) {
      console.log('Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, comments' }),
        {
          status: 400,
          headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        }
      );
    }

    // Проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        {
          status: 400,
          headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        }
      );
    }

    // Создание транспортера Nodemailer
    const transporter = createTransporter();
    const gmailUser = Deno.env.get('EMAIL_USER');

    // Формирование содержимого письма
    const mailOptions = {
      from: gmailUser, // Ваш Gmail, например, yourname@gmail.com
      to: TO, // Получатель: diganik88@gmail.com
      subject: `New Contact Form Submission from ${website || 'Unknown Site'}`,
      text: `
        Website: ${website || 'Not provided'}
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Product Name: ${productName || 'Not provided'}
        Comments: ${comments}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Product Name:</strong> ${productName || 'Not provided'}</p>
        <p><strong>Comments:</strong> ${comments}</p>
      `,
    };

    // Отправка письма
    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email', details: error.message }),
      {
        status: 500,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      }
    );
  }
});
