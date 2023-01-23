import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='title' />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Опубликовать</h1>
          <span>
            <b>Статус:</b> подготовка
          </span>
          <span>
            <b>Просмотр:</b> опубликован
          </span>
          <input style={{ display: 'none' }} type='file' name='' id='file' />
          <label className='file' htmlFor='file'>
            Загрузить картинку
          </label>
          <div className='buttons'>
            <button>Сохранить черновик</button>
            <button>Обновить</button>
          </div>
        </div>
        <div className='item'>
          <h1>Категории</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='cinema' id='cinema' />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='condition' id='condition' />
            <label htmlFor='condition'>Condition</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='ultimate' id='ultimate' />
            <label htmlFor='ultimate'>Ultimate</label>
          </div>
          <div className='cat'>
            <input type='radio' name='cat' value='diskgolf' id='diskgolf' />
            <label htmlFor='diskgolf'>Disk-golf</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
