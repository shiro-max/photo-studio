
const Error = ( { error }) => {
    console.log(error)
    return (
        <div>
            <h4 className=" text-red-400">{error.success}</h4>
            <p>{error.error}</p>
        </div>
    )
}

export default Error