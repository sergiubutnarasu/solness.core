import { AppConfigKey, Environment } from '../objects/enums';
import { AppConfig, KeyValue } from '../objects/types';

class AppHelperClass {
  private static instance: AppHelperClass;

  private appConfig: AppConfig;

  private constructor() {}

  public static getInstance() {
    if (!AppHelperClass.instance) {
      AppHelperClass.instance = new AppHelperClass();
    }
    return AppHelperClass.instance;
  }

  public init(configs?: KeyValue) {
    this.appConfig = AppHelperClass.generateAppConfig(configs);
  }

  public getConfig<K extends keyof AppConfig>(key: K): string {
    return this.appConfig[key];
  }

  public getEnvironment(): string {
    return this.appConfig[AppConfigKey.Environment];
  }

  public checkEnvironment(environment: Environment): boolean {
    return this.getEnvironment() === environment;
  }

  private static generateAppConfig(configs?: KeyValue): AppConfig {
    return {
      DatabaseHost: process.env.CORE_DB_HOST,
      DatabaseName: process.env.CORE_DB_NAME,
      DatabaseUser: process.env.CORE_DB_USER,
      DatabasePassword: process.env.CORE_DB_PASSWORD,
      DefaultEmail: process.env.CORE_DEFAULT_EMAIL,
      DefaultEncryptionKey: process.env.CORE_DEFAULT_ENCRYPTION_KEY,
      DefaultLink: process.env.CORE_DEFAULT_LINK,
      DefaultUserPassword: process.env.CORE_DEFAULT_USER_PASSWORD,
      DefaultUsername: process.env.CORE_DEFAULT_USERNAME,
      Environment: process.env.CORE_ENVIRONMENT,
      SendgridKey: process.env.CORE_SENDGRID_KEY,
      ...configs,
    };
  }
}

const AppHelper = AppHelperClass.getInstance();
export default AppHelper;
