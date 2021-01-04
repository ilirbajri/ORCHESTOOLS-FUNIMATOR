Content.makeFrontInterface(922, 467);

    // Default Fonts

Engine.loadFontAs("{PROJECT_FOLDER}calibrib.ttf", "calibrib");
Engine.setGlobalFont("calibrib");        



const var FILTER = Synth.getEffect("FILTER");

const var modes = {"1 POLE LP": 9, "1 POLE HP": 10, "SVF LP": 6, "SVF HP": 7, "BIQUAD LP": 0, "BIQUAD HP": 1, "BIQUAD LP REZ": 5, "LADDER 4 POLE": 15, "LO SHELF EQ": 2, "HI SHELF EQ": 3, "PEAK EQ": 4,  "ALLPASS": 14, "RINGMOD": 17,};

const var FilterSelect = Content.getComponent("FilterSelect");

FilterSelect.set("items", ""); //Clear list

for (k in modes)
{
    FilterSelect.addItem(k); //Add mode name to list
}

inline function onFilterSelectControl(component, value)
{
    FILTER.setAttribute(FILTER.Mode, modes[component.getItemText()]);
};

Content.getComponent("FilterSelect").setControlCallback(onFilterSelectControl);

// Preset Browser

const var LibButton = Content.getComponent("LibButton");
const var LIBRARYBROWSER = Content.getComponent("LIBRARYBROWSER");

inline function onLibButtonControl(component, value)
{
	if (value)
    {
        LIBRARYBROWSER.showControl(true);
    }
    else
    {
        LIBRARYBROWSER.showControl(false);
    }
};

Content.getComponent("LibButton").setControlCallback(onLibButtonControl);


// About Panel

const var AboutButton = Content.getComponent("AboutButton");
const var AboutPanel = Content.getComponent("ABOUT PANEL");

inline function onAboutButtonControl(component, value)
{
	if (value)
    {
        AboutPanel.showControl(true);
    }
    else
    {
        AboutPanel.showControl(false);
    }
};

Content.getComponent("AboutButton").setControlCallback(onAboutButtonControl);
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 