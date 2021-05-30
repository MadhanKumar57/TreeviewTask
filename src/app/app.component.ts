import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUITreeView } from '@lidorsystems/integralui-web/bin/integralui/components/integralui.treeview';
import {ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  
})
export class AppComponent  {
    @ViewChild('application', {read: ViewContainerRef, static: false}) applicationRef !: ViewContainerRef;
    @ViewChild('treeview', { static: false }) treeview !: IntegralUITreeView;

    public data: Array<any>;

    private itemCount: number = 1;

    // Editing
    private isEditActive: boolean = false;
    public editItem: any = null;
    private originalText: string = '';
    public editorFocused: boolean = false; 

    // Cut
    public moveItem: any = null;

    // Context Menu settings
    public menuSettings: any = {
        items: [            
            { id: 1, text: "Add Category", },
            { id: 2, text: "Add Sub Category" },
            { id: 3, text: "DeActivate" },
            { id: 4, text: "Activate" },
            { id: 5, text: "Edit" },
        ]
    }

    public contextMenuReference: any = null;

    public treeStyle: any = {
        general: {
            normal: 'trw-mst-normal'
        }
    }

    constructor(private cdr: ChangeDetectorRef){
        this.data = [
            { 
                id: 1,
                text: "PC",                
                isActive: 1,
                expanded: false,
                items: [
                    { id: 11, pid: 1, text: "Driving/Racing",isActive: 1, expanded: false,
                        items: [
                            { isActive: 1,id: 111, pid: 11, text: "DiRT 3" },
                            { isActive: 1,id: 112, pid: 11, text: "Ridge Racer Unbounded" },
                            { isActive: 1,id: 113, pid: 11, text: "TrackMania 2" }
                        ]
                    },
                    { id: 12, pid: 1, text: "Role-Playing",isActive: 1,expanded: false,
                        items: [
                            { isActive: 1,id: 121, pid: 12, text: "Dark Souls 2" },
                            { isActive: 1,id: 122, pid: 12, text: "Mass Effect 3" },
                            { isActive: 1,id: 123, pid: 12, text: "The Elder Scrolls V: Skyrim" },
                            { isActive: 1,id: 124, pid: 12, text: "Divinity: Original Sin" },
                            { isActive: 1,id: 125, pid: 12, text: "Fallout: New Vegas" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Action", expanded: false,
                        items: [
                            { isActive: 1,id: 131, pid: 13, text: "Diablo 3" },
                            { isActive: 1,id: 132, pid: 13, text: "Gears of War" },
                            { isActive: 1,id: 133, pid: 13, text: "F.E.A.R." },
                            { isActive: 1,id: 134, pid: 13, text: "Path of Exile" },
                        ], isActive: 1
                    },
                    { id: 14, pid: 1, text: "Shooter", expanded: false,
                        items: [
                            { isActive: 1,id: 141, pid: 14, text: "Battlefield: Bad Company 2" },
                            { isActive: 1,id: 142, pid: 14, text: "Call of Duty: Black Ops" },
                            { isActive: 1,id: 143, pid: 14, text: "BioShock Infinite" },
                            { isActive: 1,id: 143, pid: 14, text: "Crysis 2" }
                        ], isActive: 1
                    }
                ]
            },
            { 
                id: 2,
                text: "Xbox One",
                isActive: 1,
                expanded: false,
                items: [
                    { id: 21, pid: 2, text: "Sports",isActive: 1, expanded: false,
                        items: [
                            { isActive: 1,id: 211, pid: 21, text: "FIFA 14" },
                            { isActive: 1,id: 212, pid: 21, text: "Madden NFL 25" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Adventure",isActive: 1,expanded: false,
                        items: [
                            { isActive: 1,id: 221, pid: 22, text: "Assassin's Creed IV" },
                            { isActive: 1,id: 222, pid: 22, text: "Tomb Raider" },
                            { isActive: 1,id: 223, pid: 22, text: "Metal Gear Solid V" }
                        ]
                    }
                ]
            }            
        ];
    }

    ngAfterViewChecked(){
        //your code to update the model
        this.cdr.detectChanges();
     }

    ngAfterViewInit(){
        // This is required in order for Context Menu component to appear
        // The menu is added as a child of specified app component
        this.menuSettings.appRef = this.applicationRef;
    }

    createNewItem(activeStatus:number){
        this.itemCount++;

        return { text: "Item " + this.itemCount, isActive: activeStatus };
    }

    addRoot(){
        let item: any = this.createNewItem(1);        
        this.treeview.addItem(item);
        this.showEditor(item);
    }

    addChild(parent: any){
        let item: any = this.createNewItem(parent.isActive);        
        this.treeview.addItem(item, parent);
        this.showEditor(item);
    }

    // ContextMenu events ----------------------------------------------------------------
    menuItemClick(e: any){ 
        console.log(e);       
        if (e.item && e.event.type === "mouseup"){
            // Action depends on selected menu option
            switch (e.item.id){                           
                case 1:
                    this.addRoot();
                    break;
                case 2:
                    this.addChild(this.treeview.selectedItem);
                    break;
                case 3:                     
                    this.treeview.selectedItem.isActive = 0;                                        
                    this.recursiveLoop(this.treeview.selectedItem.items, 0);                    
                    break;
                case 4:
                    this.treeview.selectedItem.isActive = 1;                    
                    this.recursiveLoop(this.treeview.selectedItem.items, 1);
                    break;
                case 5:
                    this.showEditor(this.treeview.selectedItem);
                    break;    
            }
       }
    }

    // Editing ---------------------------------------------------------------------------

    showEditor(item: any){
        // A timeout is required in this case, because when edit option from context menu is selected
        // there is a small delay prior context menu closes and focus is transfered from context menu to the item
        // In other cases (when context menu is not used), the timout is not needed
        
        let self = this;

        let editTimeout = setTimeout(function(){
            self.originalText = item.text;
            self.isEditActive = true;
            self.editItem = item;
            self.editorFocused = true;

            clearTimeout(editTimeout);
        }, 1);
    }

    DeactivateItem(item: any){
        console.log(item);
        let self = this;

        let editTimeout = setTimeout(function(){
             self.originalText = item.text;
             self.isEditActive = true;
             self.editItem = item;
             self.editorFocused = true;

             console.log(self.treeview.selectedItem);
            
            clearTimeout(editTimeout);
        }, 1);
    }

    closeEditor(){
        this.editItem = null;
        this.originalText = '';
        this.editorFocused = false;
    }

    editorKeyDown(e: any){
        console.log('enter keycode',e)
        if (this.editItem){
            switch (e.keyCode){
                case 13: // ENTER
                    this.closeEditor();
                    break;
                    
                case 27: // ESCAPE
                    this.editItem.text = this.originalText;
                    this.closeEditor();
                    break;
            }
        }
    }

    editorLostFocus(){
        if (this.editItem)
            this.editItem.text = this.originalText;

        this.closeEditor();
    }

    rightClick(e:any)
    {
        console.log('Right Click');
    }
    
    recursiveLoop(childItems:any, activeStatus:number)
    {   
        if(childItems != undefined)     
        {
            for (var item in childItems)
            {            
                if (childItems[item] !== null) 
                {       
                    childItems[item].isActive = activeStatus;

                    if(childItems[item].items !== null)
                    {                    
                        this.recursiveLoop(childItems[item].items, activeStatus);                  
                    }
                }                   
            }
        }       
    }
    
}
