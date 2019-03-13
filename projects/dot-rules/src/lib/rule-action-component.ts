import { Component, EventEmitter, Input, Output, AfterViewInit, OnInit } from '@angular/core';

import { I18nService } from './services/system/locale/I18n';
import { ServerSideTypeModel } from './services/ServerSideFieldModel';
import {
    RULE_RULE_ACTION_UPDATE_TYPE,
    RULE_RULE_ACTION_UPDATE_PARAMETER,
    RULE_RULE_ACTION_DELETE,
    ActionModel
} from './services/Rule';
import { RuleActionActionEvent } from './rule-engine.container';
import { LoggerService } from 'dotcms-js';

@Component({
    selector: 'rule-action',
    template: `<div *ngIf="typeDropdown != null" flex layout="row" class="cw-rule-action cw-entry">
  <div flex="25" layout="row" class="cw-row-start-area">
    <cw-input-dropdown
      flex
      class="cw-type-dropdown"
      [value]="action.type?.key"
      [options]="typeDropdown.options"
      placeholder="{{actionTypePlaceholder}}"
      (onDropDownChange)="onTypeChange($event)">

    </cw-input-dropdown>
  </div>
  <cw-serverside-condition flex="75"
                           class="cw-condition-component"
                           [componentInstance]="action"
                           (parameterValueChange)="onParameterValueChange($event)">
  </cw-serverside-condition>
  <div class="cw-btn-group cw-delete-btn">
    <div class="ui basic icon buttons">
      <button class="ui button" aria-label="Delete Action" (click)="onDeleteRuleActionClicked()" [disabled]="!action.isPersisted()">
        <i class="trash icon"></i>
      </button>
    </div>
  </div>
</div>`
})
export class RuleActionComponent implements AfterViewInit, OnInit {
    @Input() action: ActionModel;
    @Input() index = 0;
    @Input() actionTypePlaceholder: string;
    @Input() ruleActionTypes: { [key: string]: ServerSideTypeModel } = {};

    @Output() updateRuleActionType: EventEmitter<RuleActionActionEvent> = new EventEmitter(false);
    @Output()
    updateRuleActionParameter: EventEmitter<RuleActionActionEvent> = new EventEmitter(false);
    @Output() deleteRuleAction: EventEmitter<RuleActionActionEvent> = new EventEmitter(false);

    typeDropdown: any;

    constructor(private _resources: I18nService, private loggerService: LoggerService) {}

    ngOnChanges(change): void {
        if (change.action) {
            if (this.typeDropdown && this.action.type) {
                if (this.action.type.key !== 'NoSelection') {
                    this.typeDropdown.value = this.action.type.key;
                }
            }
        }
    }

    ngOnInit(): void {
        this.typeDropdown = {
            options: []
        };
    }

    ngAfterViewInit(): void {
        Object.keys(this.ruleActionTypes).forEach(key => {
            const type = this.ruleActionTypes[key];
            this.typeDropdown.options.push(type._opt);
        });
    }

    onTypeChange(type: string): void {
        this.loggerService.info('RuleActionComponent', 'onTypeChange', type);
        this.updateRuleActionType.emit({
            type: RULE_RULE_ACTION_UPDATE_TYPE,
            payload: { ruleAction: this.action, value: type, index: this.index }
        });
    }

    onParameterValueChange(event: { name: string; value: string }): void {
        this.loggerService.info('RuleActionComponent', 'onParameterValueChange', event);
        this.updateRuleActionParameter.emit({
            payload: {
                ruleAction: this.action,
                name: event.name,
                value: event.value,
                index: this.index
            },
            type: RULE_RULE_ACTION_UPDATE_PARAMETER
        });
    }

    onDeleteRuleActionClicked(): void {
        this.deleteRuleAction.emit({
            type: RULE_RULE_ACTION_DELETE,
            payload: { ruleAction: this.action, index: this.index }
        });
    }
}
