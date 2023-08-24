// const Square = (props) =>{
//     console.log(props.value);
//     return <div>Hello {props.value}</div>;

// };

// eslint-disable-next-line react/prop-types
const Square = ({value}) =>{
    // console.log(props.value);
    return <button type="button" className="square">{value}</button>;

};
export default Square;