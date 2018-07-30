using System.Threading.Tasks;
using GregoryWilliams.Me.Models;
using JsonApiDotNetCore.Controllers;
using JsonApiDotNetCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GregoryWilliams.Me.Controllers
{
    public class PostsController : JsonApiController<Post>
    {
        public PostsController(
            IJsonApiContext jsonApiContext,
            IResourceService<Post> resourceService,
            ILoggerFactory loggerFactory) 
        : base(jsonApiContext, resourceService, loggerFactory)
        { }
    }
}