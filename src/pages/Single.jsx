import React from 'react';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://sun7-16.userapi.com/impg/eLnCuGHiMqLvXCVFtiseghVmI8QIaqO2RozcFQ/eIXiDN124XA.jpg?size=1280x853&quality=95&sign=585e1b778ce06a8d8964b1b7e0af1bfa&type=album'
          alt='#'
        />
        <div className='user'>
          <img
            src='https://sun9-50.userapi.com/impg/W33JENDWxBMKDflald6wDT4aIcTyB9ngijLIAg/Jh9SUr9Rp9g.jpg?size=749x500&quality=95&sign=ef59184b128f081ff9c9f12881f6e6e4&type=album'
            alt='#'
          />
          <div className='info'>
            <span>Слава Кузнецов</span>
            <p>Опубликовано 2 дня назад</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <AiFillEdit className='editbtn' />
            </Link>
            <AiFillDelete className='deletebtn' />
          </div>
        </div>
        <h1>Английский перевод H. Rackham</h1>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?
          <br />
          <br />
          Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
          набор слов, но это не совсем так. Его корни уходят в один фрагмент
          классической латыни 45 года н.э., то есть более двух тысячелетий
          назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
          штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum,
          "consectetur", и занялся его поисками в классической латинской
          литературе. В результате он нашёл неоспоримый первоисточник Lorem
          Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et
          Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году
          н.э. Этот трактат по теории этики был очень популярен в эпоху
          Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", происходит от одной из строк в разделе 1.10.32 <br />
          <br />
          Классический текст Lorem Ipsum, используемый с XVI века, приведён
          ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et
          Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914
          год.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
