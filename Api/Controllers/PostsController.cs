using GregoryWilliams.Api.Models;
using JsonApiDotNetCore.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JsonApiDotNetCore.Services;
using Microsoft.Extensions.Logging;

namespace GregoryWilliams.Api.Controllers
{
    public class PostsController : JsonApiController<Post>
    {
        public PostsController(
            IJsonApiContext jsonApiContext,
            IResourceService<Post, int> resourceService,
            ILoggerFactory loggerFactory)
            : base(jsonApiContext, resourceService, loggerFactory)
        {
        }
    }
}
