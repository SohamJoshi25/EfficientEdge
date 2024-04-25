const PairList = (props) => {
    const Pairs = props.Pairs;
    const deletePair = props.deletePair;
    return (
        <div className="PairList">
            {
                Pairs.map((pair)=>(
                <div className="pairPreview" key={pair.id}>
                    <h2> Key :{pair.key}</h2>
                    <h3>Value :{pair.value}</h3>
                    <button onClick={()=>{
                        deletePair(pair.id);
                    }}>Delete</button>
                    <br></br>
                </div>))
            }
        </div>
    );
}
 
export default PairList;