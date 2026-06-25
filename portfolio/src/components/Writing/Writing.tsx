import './Writing.css'

interface WritingPost {
  tag: string
  tagVariant?: 'green' | 'perspective'
  title: string
  description: string
  url: string
}

const posts: WritingPost[] = [
  {
    tag: 'Technical · AI · AWS',
    tagVariant: 'green',
    title: 'Personalising LLM Vocabulary with DynamoDB and Deterministic Filters',
    description:
      "Why prompting alone wasn't enough — and how a hybrid LLM and deterministic filtering approach produced more reliable personalisation.",
    url: 'https://blog.marikabergman.com/personalising-llm-output-with-dynamodb-and-deterministic-filters',
  },
  {
    tag: 'Perspective · Systems Thinking',
    tagVariant: 'perspective',
    title: 'I Learned Systems Thinking Without Knowing It',
    description:
      'How a decade working with ERP systems in operations gave me the mental models for cloud architecture — before I knew what to call them.',
    url: 'https://blog.marikabergman.com/i-learned-systems-thinking-without-knowing-it',
  },
  {
    tag: 'Kiro · Spec Driven Development',
    tagVariant: 'green',
    title: 'Spec-Driven Development: Coordinating Code with Kiro AI IDE',
    description:
      'Why I prefer spec-driven development over vibe coding — and how Kiro makes that workflow practical.',
    url: 'https://blog.marikabergman.com/spec-driven-development-coordinating-code-with-kiro-ai-ide',
  },
]

function Writing() {
  return (
    <section className="writing" id="writing">
      <p className="writing-label">// writing</p>
      <h2 className="writing-heading">Selected Posts</h2>
      <p className="writing-intro">
        I write about what I build — serverless architecture, AI integration, and the
        occasional reflection on how systems thinking transfers across domains.
      </p>
      <div className="writing-list">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="writing-card"
          >
            <div className="writing-card-body">
              <div className={`writing-card-tag${post.tagVariant === 'perspective' ? ' tag-perspective' : ''}`}>
                {post.tag}
              </div>
              <div className="writing-card-title">{post.title}</div>
              <p className="writing-card-desc">{post.description}</p>
            </div>
            <span className="writing-card-arrow">↗</span>
          </a>
        ))}
      </div>
      <a
        href="https://blog.marikabergman.com"
        target="_blank"
        rel="noopener noreferrer"
        className="writing-blog-link"
      >
        Read more on my blog →
      </a>
    </section>
  )
}

export default Writing
