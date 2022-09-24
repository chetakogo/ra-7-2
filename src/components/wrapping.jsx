import { New, Popular } from '../App';

function wrapping(Component) {
  return function (props) {
    const { views } = props;
    if (views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    } else if (views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    } else {
      return <Component {...props} />;
    }
  };
}

export default wrapping;