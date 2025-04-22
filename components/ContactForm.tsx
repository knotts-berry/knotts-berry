'use client';

import { useRouter } from 'next/router';
import { useState, useEffect, FormEvent } from 'react';
import { useFormStatus } from 'react-dom';

// フォームステートの型定義
interface FormState {
  name: string;
  email: string;
  message: string;
}

// API応答の型定義
interface FormResult {
  success: boolean;
  message: string;
}

// Netlify Form用のエンコード関数
function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

// 送信ボタンコンポーネント
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button 
      type="submit" 
      className="btn btn-primary"
      disabled={pending}
    >
      {pending ? '送信中...' : '送信する'}
    </button>
  );
}

const ContactForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<FormResult>({ success: false, message: '' });

  useEffect(() => {
    if (result.success) {
      // 送信成功時、少し待ってからリダイレクト
      const timer = setTimeout(() => {
        router.push('inquiry-send');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [result.success, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Netlify Formsの要件に従ったフェッチ
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contactForm',
          ...formState
        }),
      });

      setResult({ 
        success: true, 
        message: 'メールを送信しました。'
      });
      
      // フォームをリセット
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setResult({ 
        success: false, 
        message: error instanceof Error ? error.message : '送信中にエラーが発生しました' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-netlify="true"
      name="contactForm"
      method="post"
      data-netlify-honeypot="bot-field"
    >
      {/* Netlify Formに必要な隠しフィールド */}
      <input type="hidden" name="form-name" value="contactForm" />
      <br />

      <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
        名前
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="名前を入力してください。"
        value={formState.name}
        onChange={handleChange}
        className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500"
        required
        disabled={submitting}
      />
      <br />

      <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
        メールアドレス
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="メールアドレスを入力してください。"
        value={formState.email}
        onChange={handleChange}
        className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500"
        required
        disabled={submitting}
      />
      <p className="mt-1 text-sm text-gray-700">半角英数字で入力ください</p>
      <br />

      <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
        メッセージ
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="メッセージを入力してください。"
        value={formState.message}
        onChange={handleChange}
        className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-blue-500 focus:ring-blue-500"
        required
        disabled={submitting}
      />

      <p className="mt-6 text-center">
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={submitting}
        >
          {submitting ? '送信中...' : '送信する'}
        </button>
      </p>
      
      {/* 結果メッセージ表示 */}
      {result.message && (
        <p className={`mt-4 text-center ${result.success ? 'text-green-600' : 'text-red-600'}`}>
          {result.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
