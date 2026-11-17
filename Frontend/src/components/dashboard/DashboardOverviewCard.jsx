import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const PregnancyProgress = lazy(
  () => import("../../features/PregnancyProgress")
);

function DashboardOverviewCard({ feature, pregnancy = null, videos = [] }) {
  const Icon = feature.icon;

  return (
    <article
    
    



      className={`dashboard-overview-card ${feature.className}`}
    >

      
      <div className="overview-card-header">
        <div className="overview-icon">
          {Icon && <Icon size={22} />}
        </div>

        <span className="overview-status">{feature.status}</span>
      </div>


      {feature.image && (
  <div className="overview-card-image">
    <img
      src={feature.image}
      alt={`${feature.title} illustration`}
      loading="lazy"
    />
  </div>
)}

     







      {feature.showPregnancyProgress ? (
        <Suspense
          fallback={
            <p className="pregnancy-progress-loading" role="status">
              Loading pregnancy estimate…
            </p>
          }
        >
          <PregnancyProgress
            lastMenstrualPeriod={pregnancy?.lastMenstrualPeriod ?? null}
          />
        </Suspense>
      ) : (
        <>
          <Link to={feature.path} className="dashboard-card-main-link">
            <h3>{feature.title}</h3>

            {feature.description && <p>{feature.description}</p>}

            {feature.tips && (
              <>
                <ul className="health-tips-list">
                  {feature.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}



                </ul>
                <p className="feature-data-disclaimer">
                  General education only. Confirm care guidance with a
                  healthcare professional.
                </p>
              </>
            )}
          </Link>

          {feature.isYouTube && videos.length > 0 && (
            <div className="feature-video-list">
              {videos.map((video) => (
                <div className="feature-video-item" key={video.id}>
                  <div className="feature-video-preview">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.videoId)}`}
                      title={video.dashboardTitle ?? video.title}
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>

                  <h4>{video.dashboardTitle ?? video.title}</h4>
                  <p>{video.description}</p>
                </div>
              ))}
            </div>
          )}

          <Link to={feature.path} className="overview-card-link">
            {feature.linkText} →
          </Link>
        </>
      )}
    </article>
  );
}

export default DashboardOverviewCard;
