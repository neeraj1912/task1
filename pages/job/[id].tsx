// pages/job/[id].tsx
import { useRouter } from 'next/router';
import jobs from '../../data.json';  // Assuming you have your data in a json file

const JobDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get the job ID from the URL

  // Find the job based on the ID
  const job = jobs.find((job) => job.id.toString() === id);

  if (!job) {
    return <div>Job not found</div>; // Return a message if the job is not found
  }

  return (
    <div className="job-details-container">
      <h1>{job.position}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Contract:</strong> {job.contract}</p>
      <p><strong>Posted:</strong> {job.postedAt}</p>
      <p><strong>Level:</strong> {job.level}</p>
      <p><strong>Role:</strong> {job.role}</p>
      <p><strong>Languages:</strong> {job.languages.join(', ')}</p>
      <p><strong>Tools:</strong> {job.tools.join(', ')}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Requirements:</strong></p>
      <ul>
        {job.requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <button onClick={() => router.back()} className="back-button">Back</button>
    </div>
  );
};

export default JobDetails;
