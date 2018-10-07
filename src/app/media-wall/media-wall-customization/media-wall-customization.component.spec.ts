import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import {
	MatDialogModule,
	MatDialog,
	MatIconModule,
	MatTabsModule
} from '@angular/material';
import { MediaWallCustomizationComponent } from './media-wall-customization.component';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
	selector: 'media-wall-custom-header',
	template: ''
})
class MediaWallCustomHeaderStubComponent {
	@Input() mediaWallHeader;
}

@Component({
	selector: 'media-wall-custom-background',
	template: ''
})
class MediaWallCustomBackgroundStubComponent {
	@Input() mediaWallBackground;
}

@Component({
	selector: 'media-wall-custom-card',
	template: ''
})
class MediaWallCustomCardStubComponent {
	@Input() mediaWallCard;
}


describe('MediaWallCustomizationComponent', () => {
	let component: MediaWallCustomizationComponent;
	let dialog: MatDialog;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				BrowserAnimationsModule,
				MatDialogModule,
				MatIconModule,
				MatTabsModule,
				StoreModule.forRoot(fromRoot.reducers),
				FormsModule,
				ReactiveFormsModule
			],
			declarations: [
				MediaWallCustomizationComponent,
				MediaWallCustomHeaderStubComponent,
				MediaWallCustomCardStubComponent,
				MediaWallCustomBackgroundStubComponent
			]
		});
		TestBed.overrideModule(BrowserDynamicTestingModule, {
		set: {
			entryComponents: [ MediaWallCustomizationComponent ]
		}
});
	});
	beforeEach(() => {
			dialog = TestBed.get(MatDialog);
			const dialogRef = dialog.open(MediaWallCustomizationComponent);

			component = dialogRef.componentInstance;
		});

	it('should create an instance', () => {
		expect(component).toBeTruthy();
	});
});
