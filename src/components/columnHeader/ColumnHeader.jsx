import './columnHeader.css';

const ColumnHeader = ({title, quantity}) => {
    return ( 
        <div className="column-header grey-box">
            <h3>{title} {quantity}</h3>
        </div>
    );
}
 
export default ColumnHeader;