import Picture from "../Picture/Picture";
import Text from '../Text/Text'

export default function Article({value}) {
    
    return(
        <>
            <article>
                <Picture picture={value.src}/>
                <Text value={value.text}/>
            </article>
        </>
    )
}