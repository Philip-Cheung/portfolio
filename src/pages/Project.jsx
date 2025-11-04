import { useParams } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import ProjectNavbar from '../components/Projects/ProjectNavbar';
import ProjectLayout from '../components/Projects/ProjectLayout';
import NotFound from './NotFound';

export default function Project() {
  const { id } = useParams();
  const projectData = portfolioData.projects[id];

  // If project doesn't exist, show 404
  if (!projectData) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProjectNavbar title={projectData.title} />
      <ProjectLayout projectData={projectData} />
    </div>
  );
}

