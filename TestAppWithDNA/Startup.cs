using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestAppWithDNA.Startup))]
namespace TestAppWithDNA
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
