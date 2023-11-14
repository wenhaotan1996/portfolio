'use client';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { BsCheck } from 'react-icons/bs';
import saveMessage from '@/app/saveMsg';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SendState = 'idle' | 'sending' | 'done';

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [sendState, setSendState] = useState<SendState>('idle');

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (sendState === 'idle') {
      setSendState('sending');
      saveMessage({ ...data });
      setTimeout(() => {
        setSendState('done');
        setTimeout(() => {
          setSendState('idle');
        }, 2000);
      }, 2000);
    }
  };

  return (
    <div className="section" id="contact-me">
      <h3 className="section-header">Contact</h3>
      <div className="flex-1 space-y-2 px-4 flex flex-col items-center md:space-y-6 justify-center">
        <h4 className="text-center text-2xl font-semibold md:text-4xl">
          Send a message if you want to reach out!
        </h4>
        <div className="flex items-center space-x-2 text-xl md:text-2xl">
          <MdEmail className="animate-pulse text-red-400" />
          <p>wenhaotan123@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2 text-xl md:text-2xl">
          <FaLocationDot className="animate-pulse text-red-400" />
          <p>San Jose, California</p>
        </div>
        <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex space-x-2">
            <input
              className="contact-input w-1/2"
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
            />
            <input
              className="contact-input w-1/2"
              type="text"
              placeholder="Email"
              {...register('email', { required: true })}
            />
          </div>
          <input
            className="contact-input"
            type="text"
            placeholder="Subject"
            {...register('subject')}
          />
          <textarea
            className="contact-input"
            placeholder="Message"
            {...register('message', { required: true })}
          />
          <button className="flex items-center justify-center rounded-md bg-red-400/80 px-20 py-2 text-lg font-bold text-black/70 md:py-4">
            <div className="relative">
              <div className="absolute left-0 -translate-x-full pr-1 pt-0.5 text-2xl">
                {sendState === 'sending' && (
                  <ImSpinner2 className="animate-spin" />
                )}
                {sendState === 'done' && <BsCheck />}
              </div>
              Submit
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
