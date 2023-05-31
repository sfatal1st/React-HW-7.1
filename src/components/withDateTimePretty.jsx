import FormatDateTime from './FormatDateTime';

export default function withDateTimePretty(Component) {

    return function WrapedComponent(props) {

      const formattedDateTime = FormatDateTime(props.date);
     
      return <Component dateTime={formattedDateTime} />;
    }
}
