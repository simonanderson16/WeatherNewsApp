import "./styles.css";

export default function News({data}) {

    return (
        <>
        {console.log(data)}
        {data.map((singleStory, index) => (
            <div key={index} className="news-story">
                {index == 0 ? null : <hr></hr>}
                {console.log(singleStory)}
                {singleStory.media[0] ? <img src={singleStory.media[0]["media-metadata"][0].url}></img> : null}
                <a style={{fontWeight: 'bolder'}} href={singleStory.url} target="_blank">{singleStory.title}</a>
                <p style={{fontWeight: 'bolder'}}>{singleStory.byline}</p>
                <p>{singleStory.abstract}</p>
            </div>
        ))}
        </>
    );
}