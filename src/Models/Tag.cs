using JsonApiDotNetCore.Models;

namespace GregoryWilliams.Me.Models
{
    public class Tag : Identifiable
    {
        [Attr("name")]
        public string Name { get; set; }
    }
}