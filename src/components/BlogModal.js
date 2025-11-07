import '../Styles/BlogModal.css';
import '../Styles/GlobalStyles.css'


function BlogModal({ blog, onClose }) {
  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {blog.image && (
          <div className="modal-image">
            <img src={blog.image} alt={blog.title} />
          </div>
        )}
        
        <div className="modal-body">
          <h2>{blog.title}</h2>
          
          <div className="modal-tags">
            {blog.tags.map((tag, idx) => (
              <span key={idx} className="tag-large">{tag}</span>
            ))}
          </div>
          
          <div className="modal-content">
            {blog.content.split('\n').map((paragraph, idx) => (
              paragraph.trim() && <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
