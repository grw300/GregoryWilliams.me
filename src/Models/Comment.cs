using JsonApiDotNetCore.Models;

namespace GregoryWilliams.Me.Models
{
    public class Comment : Identifiable
    {
        [Attr("content")]
        public string Content { get; set; }

        [Attr("user-id")]
        public string UserId { get; set; }
    }
}