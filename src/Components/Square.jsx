// const Square = (props) =>{
//     console.log(props.value);
//     return <div>Hello {props.value}</div>;

// };

// eslint-disable-next-line react/prop-types

const Square = ({value , onClick}) =>{
    // console.log(props.value);
    return <button type="button" className="square" onClick={onClick}>{value}</button>;

};
export default Square;