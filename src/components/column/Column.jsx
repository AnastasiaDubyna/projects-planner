import ColumnBody from "../columnBody/ColumnBody";
import ColumnHeader from "../columnHeader/ColumnHeader";


const Column = ({title, quantity, content, stage, toggleTaskPopup}) => {
    return (
        <div className="column">
            <ColumnHeader title={title} quantity={quantity} />
            <ColumnBody content={content} stage={stage} toggleTaskPopup={toggleTaskPopup}/>
        </div>
    );
}
 
export default Column;