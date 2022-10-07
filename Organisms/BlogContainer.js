import Title from "../Atoms/Title";
import AuthorDetails from "../Molecules/AuthorDetails";
import BlogContent from "../Molecules/BlogContent";

export default function BlogContainer() {
    return (
        <div className="blog-container">
            <Title />
            <AuthorDetails />
            <BlogContent />
        </div>
    );
}