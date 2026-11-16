import FeaturePage from "../components/FeaturePage";
import { healthVideos } from "../config/dashboardContent";
import "../styles/features.css";

function HealthResources() {
  return (
    <FeaturePage
      title="Health Resources"
      description="Browse external educational videos. Confirm personal care decisions with a qualified healthcare professional."
    >
      <div className="health-video-grid">
        {healthVideos.map((video) => (
          <article className="health-video-card" key={video.id}>
            <div className="health-video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.videoId)}`}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="health-video-content">
              <h2>{video.title}</h2>
              <p>{video.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${encodeURIComponent(video.videoId)}`}
                target="_blank"
                rel="noreferrer"
              >
                Open on YouTube
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="feature-data-disclaimer">
        Videos are hosted by YouTube. Jali Mama does not control their
        availability or verify their current clinical guidance.
      </p>
    </FeaturePage>
  );
}

export default HealthResources;