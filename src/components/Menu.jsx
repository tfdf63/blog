import React from 'react';

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: 'Классический текст Lorem Ipsum, используемый с XVI века',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      img: 'http://dummyimage.com/1123x4500.png/dddddd/000000',
    },
    {
      id: 2,
      title:
        'Абзац 1.10.33 "de Finibus Bonorum et Malorum", написанный Цицероном в 45 году н.э.',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      img: 'http://dummyimage.com/1142x2000.png/5fa2dd/ffffff',
    },
    {
      id: 3,
      title: 'Английский перевод 1914 года, H. Rackham',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
      img: 'http://dummyimage.com/1126x1000.png/dddddd/000000',
    },
    {
      id: 4,
      title: 'Абзац 1.10.33 "de Finibus Bonorum et Malorum"',
      desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
      img: 'http://dummyimage.com/1162x2050.png/ff4444/ffffff',
    },
  ];

  return (
    <div className='menu'>
      <h1>Самый лучший пост</h1>
      {posts.map((post) => (
        <div className='post' key={post.id}>
          <img src={post.img} alt='#' />
          <h2>{post.title}</h2>
          <button>Прочитать полностью</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
