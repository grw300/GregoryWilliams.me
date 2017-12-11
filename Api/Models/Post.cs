using JsonApiDotNetCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GregoryWilliams.Api.Models
{
    public class Post : Identifiable
    {
        [Attr("title")]
        public string Title { get; set; }

        [Attr("content")]
        public string Content { get; set; }
    }
}
