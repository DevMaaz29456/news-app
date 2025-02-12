import image from "../assets/news.avif";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-4 d-inline-block mx-3 shadow-lg border-0"
      style={{
        maxWidth: "360px",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        alt="news"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title text-warning" style={{ minHeight: "60px" }}>
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h5>
        <p className="card-text" style={{ minHeight: "80px", color: "#ccc" }}>
          {description
            ? description.slice(0, 90) + "..."
            : "Stay updated with the latest news, breaking stories, and top headlines!"}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning w-100 fw-bold"
          style={{
            borderRadius: "8px",
            backgroundColor: "#ff9800",
            border: "none",
          }}
        >
          Read More 📖
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
