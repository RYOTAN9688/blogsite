export const Self_introduction = () => {
  return (
    <>
      <div className='flex flex-col flex-wrap  lg:pl-12 lg:text-left text-center'>
        <div className='flex flex-col mb-10 lg:items-start items-center'>
          <div className='flex-grow'>
            <h1 className='text-white text-lg title-font font-medium mb-3'>自己紹介</h1>
            <p className='leading-relaxed text-base text-gray-300'>
              1996年生まれ。石川生まれでずっと石川に住んでいます（地元愛💓）。
              フロントエンドエンジニアを目指して勉強中です。
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:items-start items-center'>
          <div className='flex-grow'>
            <h1 className='text-white text-lg title-font font-black mb-3'>HOBBY</h1>
            <ul>
              <li className='font-medium text-gray-200'>音楽を聞くこと🎶</li>
              <p className='text-gray-300'>
                基本的になんでも聞きます。
                学生のころは80年代、90年代の曲をよく聞いていてBOOWYが大好きでした。
              </p>
              <br />
              <li className='font-medium text-gray-200'>ドライブ🚙</li>
              <p className='text-gray-300'>
                車を走らせることが好きなので、天気の良い日は海に行ったり、景色のいいところまでドライブします！！
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
