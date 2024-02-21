import ProgressBar from 'react-bootstrap/ProgressBar';

function FooterProgressBar({ now, message }) {
    return (
      <div style={{ position: 'fixed', width: '100%', bottom: 0, left: 0, backgroundColor: '#f8f9fa' }}>
        <ProgressBar now={now} />
        {message && <p style={{ textAlign: 'center' }}>{message}</p>}
      </div>
    );
  }
  

export default FooterProgressBar;
