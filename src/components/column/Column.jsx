import ColumnBody from "../columnBody/ColumnBody";
import ColumnHeader from "../columnHeader/ColumnHeader";


const Column = ({title, quantity, content, stage}) => {
    return (
        <div className="column">
            <ColumnHeader title={title} quantity={quantity} />
            <ColumnBody content={content} stage={stage} />
        </div>
    );
}
 
export default Column;