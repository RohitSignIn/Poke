import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div style={{
        position: 'fixed',
        left: "50%",
        top: "20%",
        transform: "translateX(-50%)"
    }}>
        <ReactLoading type={'spin'} color={'#fff'} height={333} width={187} />
    </div>
  )
}

export default Loading