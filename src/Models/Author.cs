using JsonApiDotNetCore.Models;

namespace GregoryWilliams.Me.Models
{
    public class Author : Identifiable
    {
        [Attr("name")]
        public string Name { get; set; }

        [Attr("email")]
        public string Email { get; set; }
    }
}