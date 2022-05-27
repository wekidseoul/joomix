import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import styled from 'styled-components';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../fb';

import { ctx } from '../context';
import { Comment } from '../types';

import Button from './UI/Button';

const StyledNewComment = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 32px 40px;
  background-color: #f0f0f0;
  border-radius: 8px;
  & > div {
    display: flex;
    flex-direction: column;
    width: 240px;
    label {
      font-size: 0.8rem;
      margin-bottom: 4px;
    }
    input,
    textarea {
      font-family: inherit;
      font-size: 0.9rem;
      width: 100%;
      padding: 8px;
    }
    input {
      height: 32px;
    }
    textarea {
      resize: none;
      height: 160px;
    }
  }
`;

const initialState: Comment = {
  name: '',
  nickname: '',
  avatar: {
    background: '',
    clothes: '',
    face: '',
    hair: '',
  },
  message: '',
};

const NewComment: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [form, setForm] = useState<Comment>(initialState);
  const { avatar } = useContext(ctx);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (Object.values(form).findIndex((value) => value === '') !== -1) return;

    await addDoc(collection(db, 'comments'), {
      ...form,
      avatar: avatar,
      regDate: new Date().toISOString(),
    });

    closeModal();
  };

  return (
    <StyledNewComment onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="nickname">세례명</label>
        <input
          id="nickname"
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message">간증문</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" text="완료" onClick={handleSubmit} />
    </StyledNewComment>
  );
};

export default NewComment;
