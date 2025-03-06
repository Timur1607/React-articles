import './Picture.css'
export default function Picture({picture}) {
    return(
        <>
            <img className='picture' src={picture} alt="" />
        </>
    )
}