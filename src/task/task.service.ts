import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class TaskService {
  constructor(
    private configService: ConfigService,
    private i18n: I18nService,
  ) {}

  get() {
    return { name: this.configService.get('app.name') };
  }

  update(task) {
    //TODO
  }

  create() {
    return { success: true };
  }

  async delete() {
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: await this.i18n.t('common.notFound'),
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
