import { DotMessagePipeModule } from '@pipes/dot-message/dot-message-pipe.module';
import { DotMessageService } from '@services/dot-message/dot-messages.service';
import { FormatDateService } from '@services/format-date-service';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { MockDotMessageService } from '@tests/dot-message-service.mock';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DotBulkInformationComponent } from './dot-bulk-information.component';

const messageServiceMock = new MockDotMessageService({
    archived: 'archived'
});

export default {
    title: 'DotCMS/Misc/BulkDialog',
    decorators: [
        moduleMetadata({
            imports: [DotMessagePipeModule],
            providers: [
                DynamicDialogRef,
                FormatDateService,
                DialogService,
                { provide: DotMessageService, useValue: messageServiceMock },
                {
                    provide: DynamicDialogConfig,
                    useValue: {
                        data: {
                            fails: [
                                {
                                    description: 'Blank - 1',
                                    errorMessage:
                                        'Template cannot be published because it is archived'
                                },
                                {
                                    description: 'Blank - 2',
                                    errorMessage:
                                        'Template cannot be published because it is archived'
                                },
                                {
                                    description: 'Blank - 3',
                                    errorMessage:
                                        'Template cannot be published because it is archived'
                                },
                                {
                                    description: 'Blank - 4',
                                    errorMessage:
                                        'Template cannot be published because it is archived'
                                }
                            ],
                            successCount: 1,
                            action: messageServiceMock.get('archived')
                        }
                    }
                }
            ],
            declarations: [DotBulkInformationComponent]
        })
    ],
    component: DotBulkInformationComponent,
    args: {}
} as Meta;

const container = (child) => {
    return `
    <div style="
      background: white;
      padding: 2rem;
      width: 500px; 
      margin: 0 auto; 
      height: 420px; 
      overflow: auto;
      border: 1px solid #eee;
      " 
    >
      ${child}
    </div>`;
};

export const Basic: Story = (props) => {
    return {
        template: `
          ${container(`<dot-bulk-information></dot-bulk-information>`)}
        `,
        props
    };
};