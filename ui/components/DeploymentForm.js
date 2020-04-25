import React, {useState} from 'react';
import {addDeployment} from '../actions/async/deploymentActions';
import {connect} from 'react-redux';

function getTemplates(templates) {
    return templates.map(template => {
        return <option key={template._id}>{template.name}</option>
    })
}

function getVersions(templateIndex = 0, templates) {
    return templates[templateIndex]
        .versions
        .map((version, index) => {
            return <option key={index}>{version}</option>
        })
}

function DeploymentForm({templates, addDeployment}) {
    if (templates.length === 0) 
        return null
    const [name,
        setName] = useState(templates[0].name);
    const [templateIndex,
        setIndex] = useState(0);
    const [version,
        setVersion] = useState(templates[0].versions[0]);
    const [url,
        setUrl] = useState("");
    const onChangeTemplate = (event) => {
        const name = event.target.value;
        for (let index = 0; index < templates.length; index++) {
            const element = templates[index];
            if (element.name === name) {
                setIndex(index)
                break
            }
        }
        setName(name)
    }
    const onChangeVersion = (event) => setVersion(event.target.value)
    const onChangeUrl = (event) => setUrl(event.target.value)

    return (
        <form
            onSubmit={(event) => {
            event.preventDefault();
            addDeployment({name, url, version})
        }}>
            <div>
                <select onChange={onChangeTemplate} value={name}>{getTemplates(templates)}</select>
            </div>
            <div>
                <select onChange={onChangeVersion} value={version}>{getVersions(templateIndex, templates)}</select>
            </div>
            <div>
                <input
                    placeholder='enter url...'
                    onChange={onChangeUrl}
                    type='text'
                    value={url}></input>
            </div>
            <button>Submit</button>
        </form>
    )
}

const mapStateToProps = (state) => ({templates: state.templates});
const mapDispatchToProps = (dispatch) => ({
    addDeployment: (deployObj) => dispatch(addDeployment(deployObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeploymentForm)
