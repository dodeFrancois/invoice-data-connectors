import start from './scrapping/bootstrap';
import BrowserInstance from './scrapping/models/BrowserInstance';
import bootstrap from './scrapping/bootstrap';


class Application {
  private static instance: Application;

  app: BrowserInstance;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor(app: BrowserInstance) {
    this.app = app;
  }

  public static async bootstrap(): Promise<Application> {
    if (!Application.instance) {
      const browserInstance = await Application.internalBootstrap();
      Application.instance = new Application(browserInstance);
    }
    return Promise.resolve(Application.instance);
  }

  async gracefulStop() {
    await this.app.stop();
    console.log('Shutting down application');
  }

  private static async internalBootstrap() {
    const browserInstance = await start();
    console.log('Headless browser started');
    return browserInstance;
  }
}


Application.bootstrap().then(app => app.gracefulStop());
