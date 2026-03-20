import AlertButton from './AlertButton.jsx'

function Toolbar() {

return (
<div>
<AlertButton message='Playing movie' bgColor='green'>Play</AlertButton>
<AlertButton message='Recording audio' bgColor='red'>Record</AlertButton>
<AlertButton message='Uploading file' bgColor='blue'>Upload</AlertButton>

</div>
)
}
export default Toolbar