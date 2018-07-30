using System.Collections.Generic;
using JsonApiDotNetCore.Models;

namespace GregoryWilliams.Me.Models
{
    public class Post : Identifiable
    {
        [Attr("title")]
        public string Title { get; set; }

        [Attr("summary")]
        public string Summary { get; set; }

        [Attr("content")]
        public string Content { get; set; }

        [HasMany("authors")]
        public List<Author> Authors { get; set; }

        [HasMany("comments")]
        public List<Comment> Comments { get; set; }

        [HasMany("tags")]
        public List<Tag> Tags { get; set; }
    }
}
