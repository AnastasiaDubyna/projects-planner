import ColumnBody from "../columnBody/ColumnBody";
import ColumnHeader from "../columnHeader/ColumnHeader";


const Column = ({title, quantity, content}) => {
    return (
        <div className="column">
            <ColumnHeader title={title} quantity={quantity} />
            <ColumnBody content={content} />
        </div>
    );
}
 
export default Column;