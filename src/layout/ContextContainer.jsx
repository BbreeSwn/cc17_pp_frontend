


export default function ContextContainer({src , headTitle,subTitle,newsContent}) {

  return (
      <div className="flex justify-center flex-col gap-10 items-center h-auto">
        <div className="flex w-3/5 mt-10 ">
            <img src={src} />
        </div>
        <div name="Head-title">
          <h1>{headTitle}</h1>
        </div>
        <div name="sub-title">
            <h3>{subTitle}</h3>
        </div>
        <div name="news-content">
            <p>{newsContent}</p>
        </div>
      </div>
  );
}

/* content-image */

// position: absolute;
// width: 897px;
// height: 595px;
// left: 257px;
// top: 300px;

// background: url(content4.jpg);
// border-radius: 30px;

