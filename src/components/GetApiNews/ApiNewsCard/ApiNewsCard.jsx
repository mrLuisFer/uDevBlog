// import react from 'react'

export default function ApiNewsCard({ title, description, link }) {
  return (
    <div className='ApiNewsCard'>
      <p>{title}</p>
      <p>{description}</p>
      <span>{link}</span>
    </div>
  );
}
