import withDateTimePretty from './withDateTimePretty';
import DateTime from './DateTime';

export default function Video(props) {
    const DateTimePretty = withDateTimePretty(DateTime);
    
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}